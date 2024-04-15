package controllers

import(
	"github.com/gin-gonic/gin"
	"log"
	"strconv"
)

type DataController struct{}

func (pc DataController) Get(c *gin.Context){
	

	c.JSON(200, gin.H{
		"message": "get and down",
	})
}

func (pc DataController) Postdata(c *gin.Context){
	log.Println("connect to database")
	_, err := db.Exec("INSERT INTO about (title) VALUES (?)", "step by step")
	if err != nil {
		log.Fatalf("failed to send data to the db: %v", err)
	}
}

func (pc DataController) Delete(c *gin.Context){	
	ids := c.Param("id")
	id,err := strconv.Atoi(ids)
	if err != nil {
		c.JSON(400,gin.H{"error":"Invalid ID",})
		return 
	}
	_, err = db.Exec("DELETE FROM about WHERE id = ?",id)
	if err != nil{
		log.Fatalf("failed to delete data from the db:%v",err)
		c.JSON(500,gin.H{
			"error":"Failed to delete data",
		})
		return 
	}
	c.JSON(200,gin.H{
		"message":"Data deleted successsfully",
	})
}
