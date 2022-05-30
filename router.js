const express = require('express');
const fs = require('fs');
const db = require("./db");
const uuid = require("uuid")
const multer = require("multer")
const {
    marked
} = require("marked")
const {
    generateToken
} = require("./token");

const router = express.Router()
const rendererMD = new marked.Renderer();
marked.setOptions({
    renderer: rendererMD,
    gfm: true,
    tables: true,
    breaks: false,
    pedantic: false,
    sanitize: false,
    smartLists: true,
    smartypants: false
});

router.post("/login", (req, res) => {
    db.query(`select * from user where username = '${req.body.username}' and password = '${req.body.password}'`, (err, result) => {
        if (err) {
            console.log(err)
            return;
        };
        if (!result.length) {
            res.send({
                code: 400,
                msg: "用户名或密码出错!"
            });
            return;
        };
        console.log(result);
        res.send({
            code: 200,
            msg: "登陆成功",
            id: result[0].id,
            avater: result[0].avater,
            token: generateToken(req.body)
        })
    })
})

router.post("/validateName", (req, res) => {
    // console.log(req.body)
    db.query(`select * from user where username = '${req.body.username}'`, (err, nameResult) => {
        if (err) {
            console.log(err)
            return;
        };
        if (nameResult.length) {
            res.send({
                code: 400,
                msg: "用户名已存在!"
            });
            return;
        };
        res.send({
            code: 200
        })
    })
})
router.post("/register", (req, res) => {
    const id = uuid.v1()
    db.query(`insert into user(id, username, email, password, avater) values('${id}','${req.body.username}','${req.body.email}','${req.body.password}', '${req.body.avater}' ) `, (err, result) => {
        if (err) {
            console.log(err)
            return;
        };
        console.log(result)
        res.send({
            code: 200,
            msg: "注册成功!"
        });
    })


})

router.get("/getLabels", (req, res) => {
    db.query(`select * from blog_label`, (err, result) => {
        if (err) {
            console.log(err)
            return;
        };
        res.send({
            code: 200,
            labels: result

        });
    })
})

router.post("/addBlog", async (req, res) => {
    if (!req.body.title) {
        res.send({
            code: 400,
            msg: "标题不能为空!"
        })
        return;
    }

    if (!req.body.content) {
        res.send({
            code: 400,
            msg: "博客内容不能为空!"
        })
        return;
    };
    if (!req.body.labels.length) {
        res.send({
            code: 400,
            msg: "请选择标签!"
        })
        return;
    };
    const id = uuid.v1()
    pictureUrls = []
    pictures = req.body.pictures;
    let pictureNames = []
    for (let i in pictures) {
        pictureNames.push(pictures[i].name)
        const newPath = 'static/blog/' + pictures[i].timeStamp + pictures[i].name;
        const base64 = pictures[i].url.replace(/^data:image\/\w+;base64,/, "");
        const dataBuffer = Buffer.from(base64, 'base64'); //把base64码转成buffer对象
        const message = await new Promise((resolve, reject) => {
            fs.writeFile(newPath, dataBuffer, function (err) { //用fs写入文件
                if (err) {
                    reject(err);
                } else {
                    resolve("成功");
                }
            })
        })
        console.log(message);
        picUrl = "http://" + req.headers.host + "/" + newPath
        pictureUrls.push(picUrl);
    }

    for (let i = 0; i < pictureUrls.length; i++) {
        req.body.content = req.body.content.replace(`![${pictureNames[i]}](${i+1})`, `![](${pictureUrls[i]})`)
    }




    labels = req.body.labels.join()

    db.query(`insert into blog(id, title, content, create_time, username,labels, views, likes) values(?, ?, ?, ?, ?, ?, ?, ?)`, [id, req.body.title, req.body.content, req.body.createTime, req.body.username, labels, 0, 0], (err, result) => {
        if (err) {
            console.log(err)
            return;
        };
        console.log(result)
        res.send({
            code: 200,
            msg: "发布成功!"
        });
    })

})

router.get("/getBlogs", async (req, res) => {

    const pageSize = 5;
    let page = 0;

    let blogSql = "select * from blog where 1 = 1";
    if (req.query.page) {
        page = (req.query.page - 1) * pageSize;
    }
    if (req.query.keywords) {
        blogSql += ` and title like '%${req.query.keywords}%'`
    }
    if (req.query.label) {
        blogSql += ` and labels like '%${req.query.label}%'`
    }


    blogSql += ` order by 
    YEAR (create_time),
    MONTH (create_time),
	DAY (create_time),
	HOUR (create_time),
	MINUTE (create_time),
	SECOND (create_time) 
    limit ${page}, ${pageSize}`
    const blogs = await new Promise((resolve, reject) => {
        let results = [];
        db.query(blogSql, (err, result) => {
            if (err) {
                reject(err)
            };
            for (item of result) {
                let labels = [];
                labels = item.labels.split(",");
                const content = marked(item.content).replace(/<[^<>]+>/g, "");
                results.push({
                    id: item.id,
                    title: item.title,
                    content,
                    createTime: item.create_time,
                    username: item.username,
                    labels,
                    views: item.views,
                    likes: item.likes
                })
            };
            resolve(results);
        })
    })

    let numSql = "select count(*) from blog where 1 = 1";
    if (req.query.keywords) {
        numSql += ` and title like '%${req.query.keywords}%'`
    }
    if (req.query.label) {
        numSql += ` and labels like '%${req.query.label}%'`
    }
    const total = await new Promise((resolve, reject) => {
        db.query(numSql, (err, result) => {
            if (err) {
                reject(err)
            };
            resolve(result[0]["count(*)"])
        })
    })


    res.send({
        code: 200,
        blogs,
        total
    });
})


router.get("/getBlogDetail", async (req, res) => {
    let blogSql = `select * from blog where id = '${req.query.id}'`;
    const blogResult = await new Promise((resolve, reject) => {
        db.query(blogSql, (err, result) => {
            if (err) {
                reject(err)
            };
            resolve(result[0])
        })
    });
    if (!req.query.isUpdate) {
        blogResult.content = marked(blogResult.content)
    }
    let userSql = `select * from user where username = '${blogResult.username}'`
    const userResult = await new Promise((resolve, reject) => {
        db.query(userSql, (err, result) => {
            if (err) {
                reject(err);
            };
            resolve(result[0])
        })
    });

    const blogDetail = {
        avater: userResult.avater,
        ...blogResult,
    };

    res.send({
        code: 200,
        blogDetail
    })

})


router.put("/updateLikes", async (req, res) => {
    let likeSql = "";
    let blogSql = "";

    if (!req.body.username) {
        if (req.body.isLike) {
            blogSql = `update blog set likes = likes + 1 where id = '${req.body.blogId}'`;
        } else {
            blogSql = `update blog set likes = likes - 1 where id = '${req.body.blogId}'`;
        }
        await new Promise((resolve, reject) => [
            db.query(blogSql, (err, result) => {
                if (err) {
                    reject(err);
                };
                resolve(result);
            })
        ]);
    } else {
        if (req.body.isLike) {
            likeSql = `insert into likes (username, blogId, createTime) values(?, ?, ${ new Date().getTime()})`;
            blogSql = `update blog set likes = likes + 1 where id = '${req.body.blogId}'`;
        } else {
            likeSql = "delete from likes where username = ? and blogId = ?";
            blogSql = `update blog set likes = likes - 1 where id = '${req.body.blogId}'`;
        }
        await new Promise((resolve, reject) => [
            db.query(likeSql, [req.body.username, req.body.blogId], (err, result) => {
                if (err) {
                    reject(err);
                };
                resolve(result);
            })
        ]);
        await new Promise((resolve, reject) => [
            db.query(blogSql, (err, result) => {
                if (err) {
                    reject(err);
                };
                resolve(result);
            })
        ]);
        // res.send({
        //     code: 200,
        //     msg: "成功"
        // })
    }


})


router.put("/updateViews", (req, res) => {
    db.query(`update blog set views = views + 1 where id = '${req.body.blogId}'`, (err, result) => {
        if (err) {
            console.log(err)
            return;
        };
        res.send({
            code: 200,
            msg: "成功"
        })
    })
})


router.get("/isLike", (req, res) => {
    let sql = "select * from likes where username = ? and blogId = ?";
    db.query(sql, [req.query.username, req.query.blogId], (err, result) => {
        if (err) {
            console.log(err)
            return;
        };
        if (result.length) {
            res.send({
                isLike: true
            })
        } else {
            res.send({
                isLike: false
            })
        }
    })
})


router.get("/getUserBlogs", async (req, res) => {
    const pageSize = 4;
    let page = 0;
    let blogSql = `select * from blog where username = '${req.query.username}'`;
    if (req.query.page) {
        page = (req.query.page - 1) * pageSize;
    }
    blogSql += ` order by 
    YEAR (create_time),
    MONTH (create_time),
	DAY (create_time),
	HOUR (create_time),
	MINUTE (create_time),
	SECOND (create_time) 
    limit ${page}, ${pageSize}`
    const blogs = await new Promise((resolve, reject) => {
        let results = [];
        db.query(blogSql, (err, result) => {
            if (err) {
                reject(err)
            };
            for (item of result) {
                let labels = [];
                labels = item.labels.split(",");
                const content = marked(item.content).replace(/<[^<>]+>/g, "");
                results.push({
                    id: item.id,
                    title: item.title,
                    content,
                    createTime: item.create_time,
                    username: item.username,
                    labels,
                    views: item.views,
                    likes: item.likes
                })
            };
            resolve(results);
        })
    })

    let numSql = `select count(*) from blog where username = '${req.query.username}'`;
    const total = await new Promise((resolve, reject) => {
        db.query(numSql, (err, result) => {
            if (err) {
                reject(err)
            };
            resolve(result[0]["count(*)"])
        })
    })
    let viewsNumSql = `select sum(views) from blog where username = '${req.query.username}'`
    const viewsTotal = await new Promise((resolve, reject) => {
        db.query(viewsNumSql, (err, result) => {
            if (err) {
                reject(err)
            };
            resolve(result[0]["sum(views)"])
        })
    })
    let likesNumSql = `select sum(likes) from blog where username = '${req.query.username}'`
    const likesTotal = await new Promise((resolve, reject) => {
        db.query(likesNumSql, (err, result) => {
            if (err) {
                reject(err)
            };
            resolve(result[0]["sum(likes)"])
        })
    })

    let avaterSql = `select avater from user where username = '${req.query.username}'`
    const avater = await new Promise((resolve, reject) => {
        db.query(avaterSql, (err, result) => {
            if (err) {
                reject(err)
            };
            resolve(result[0]["avater"])
        })
    })

    res.send({
        code: 200,
        blogs,
        total,
        viewsTotal,
        likesTotal,
    });
})

router.get("/getAvater", async (req, res) => {
    let avaterSql = `select avater from user where username = '${req.query.username}'`
    const avater = await new Promise((resolve, reject) => {
        db.query(avaterSql, (err, result) => {
            if (err) {
                reject(err)
            };
            resolve(result[0]["avater"])
        })
    })

    res.send({
        code: 200,
        avater,
    });
})


// 上传图片的方法
const storage = multer.diskStorage({
    // 存储位置 
    destination: function (req, file, callback) {
        // 参数解释 param1:错误信息  param2:上传图片的服务端保存路径，注意这里的路径写法
        callback(null, "./static/avater")
    },
    // 确定文件名,在这儿采用了时间戳和图片文件原名为上传的图片文件命名，可以保证名字不重复
    filename: function (req, file, cb) {
        cb(null, `${Date.now()}-${file.originalname}`)
    }
})
// 得到multer对象
const upload = multer({
    storage: storage
})

router.post("/upLoadAvater", upload.array("img", 1), (req, res) => {
    if (req.headers.token) {
        avaterUrl = "http://" + req.headers.host + "/" + req.files[0].path.replace(/\\/g, "/")
        let sql = `update user set avater = '${avaterUrl}' where username = '${req.body.username}'`
        db.query(sql, (err, result) => {
            if (err) {
                console.log(err)
                return;
            };
            res.send({
                code: 200,
                imgUrl: avaterUrl
            })
        })
    }
})

router.delete("/deleteBlog", (req, res) => {
    let sql = `delete from blog where id = '${req.query.id}'`
    db.query(sql, (err, result) => {
        if (err) {
            console.log(err)
            return;
        };
        res.send({
            code: 200,
            msg: "删除成功"
        })
    })

})




router.put("/updateBlog", async (req, res) => {
    if (!req.body.blog.title) {
        res.send({
            code: 400,
            msg: "标题不能为空!"
        })
        return;
    }

    if (!req.body.blog.content) {
        res.send({
            code: 400,
            msg: "博客内容不能为空!"
        })
        return;
    };
    if (!req.body.blog.labels.length) {
        res.send({
            code: 400,
            msg: "请选择标签!"
        })
        return;
    };
    pictureUrls = []
    pictures = req.body.blog.pictures;
    let pictureNames = []
    for (let i in pictures) {
        pictureNames.push(pictures[i].name)
        const newPath = 'static/blog/' + pictures[i].timeStamp + pictures[i].name;
        const base64 = pictures[i].url.replace(/^data:image\/\w+;base64,/, "");
        const dataBuffer = Buffer.from(base64, 'base64'); //把base64码转成buffer对象
        const message = await new Promise((resolve, reject) => {
            fs.writeFile(newPath, dataBuffer, function (err) { //用fs写入文件
                if (err) {
                    reject(err);
                } else {
                    resolve("成功");
                }
            })
        })
        console.log(message);
        picUrl = "http://" + req.headers.host + "/" + newPath
        pictureUrls.push(picUrl);
    }

    for (let i = 0; i < pictureUrls.length; i++) {
        req.body.blog.content = req.body.blog.content.replace(`![${pictureNames[i]}](${i+1})`, `![](${pictureUrls[i]})`)
    }

    let sql = `update blog set title = ?, content = ?, labels = ? where id = ?`;
    req.body.blog.labels = req.body.blog.labels.join()
    db.query(sql, [req.body.blog.title, req.body.blog.content, req.body.blog.labels, req.body.id], (err, result) => {
        if (err) {
            res.send({
                code: 400,
                msg: "修改失败！"
            })
            return;
        };
        res.send({
            code: 200,
            msg: "修改成功！"
        })
    })
})

module.exports = router