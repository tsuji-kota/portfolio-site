package router

import (
	"github.com/gin-gonic/gin"
	"github.com/tsuji-kota/portfolio-site/backend/controllers"
)

func GetRouter() *gin.Engine{
	router := gin.Default()

	// data関連のルートグループ
	d := router.Group("/data"){
		ctrl = controllers.DataController{}
		d.GET("",ctrl.Get)
		d.POST("",ctrl.Create)
		d.GET("/:id",ctrl.Show)
		d.PUT("/:id",ctrl.Update)
		d.DELETE("/:id",ctrl.Delete)
	}

	return router
}