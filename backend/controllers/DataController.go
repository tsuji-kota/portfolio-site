package controllers

import(
	"github.com/gin-gonic/gin"
	"log"
)

type DataController struct{}

func (pc DataController) Get(c *gin.Context){
	

	c.JSON(200, gin.H{
		"message": "get and down",
	})
}

func (pc DataController) Postdata(c *gin.Context){
	
	log.Println("connect to database")
	_, err := db.Exec("INSERT INTO about (id,title) VALUES (?,?)", 1, "tetstststds")
	if err != nil {
		log.Fatalf("failed to send data to the db: %v", err)
	}
}
