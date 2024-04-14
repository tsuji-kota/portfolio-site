package main

import (
	"github.com/tsuji-kota/portfolio-site/backend/router"


)

func main() {	
	 router.GetRouter()
	// router := router.Init()

	// ルートハンドラの定義
	// router.GET("/", func(c *gin.Context) {
	// 	c.JSON(200, gin.H{
	// 		"message": "Long time no see!",
	// 	})
	// })

	// サーバー起動
	// router.Run(":8080")
	
}