package router

import (
	"github.com/gin-gonic/gin"
	"github.com/tsuji-kota/portfolio-site/backend/controllers"
)

func Init() {
    r := GetRouter()
    r.Run(":8080")
}

func GetRouter() *gin.Engine{
	router := gin.Default()

	// data関連のルートグループ
	// d := router.Group("/data"){
	// 	ctrl = controllers.DataController{}
	// 	d.GET("/aa",ctrl.Get)
	// 	d.POST("",ctrl.Create)
	// 	d.GET("/:id",ctrl.Show)
	// 	d.PUT("/:id",ctrl.Update)
	// 	d.DELETE("/:id",ctrl.Delete)
	// }

	router.GET("/", func(c *gin.Context) {
		c.JSON(200, gin.H{
			"message": "Long time no see!",
		})
	})

	return router
}