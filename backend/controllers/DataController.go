package controllers

import(
	"github.com/gin-gonic/gin"
)

type DataController struct{}

func (pc DataController) Get(c *gin.Context){
	c.JSON(200, gin.H{
		"message": "get and down",
	})
}