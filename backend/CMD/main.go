package main

import (
	"github.com/gin-gonic/gin"
	"github.com/tsuji-kota/portfolio-site/backend/router"
)

func main() {	
	// ルートハンドラの定義
	// router.GET("/", func(c *gin.Context) {
	// 	c.JSON(200, gin.H{
	// 		"message": "Hello, World!",
	// 	})
	// })

	router := controller.GetRouter()

	// サーバー起動
	router.Run(":8080")
}