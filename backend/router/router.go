package router

import (
	"github.com/gin-gonic/gin"
	"github.com/tsuji-kota/portfolio-site/backend/controllers"
	_ "net/http"
)

func Init(){
	r := GetRouter()
	r.Run(":8080")
}

func GetRouter() *gin.Engine{
	router := gin.Default()
	router.GET("/", 
		func(c *gin.Context) {	c.JSON(200, gin.H{
			"message": "Put your hands Up!!",
		})})

	d := router.Group("/data")
	{
		ctrl := controllers.DataController{}
		d.GET("",ctrl.Get)
		// d.POST("",ctrl.Create)
		// d.PUT("/:id",ctrl.Update)
		// d.DELETE("/:id",ctrl.Delete)
	}
	return router
}