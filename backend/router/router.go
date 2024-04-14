package router

import (
	"github.com/gin-gonic/gin"
	"net/http"
	"log"
	
)

func GetRouter(){
	router := gin.Default()
	router.GET("/", 
		func(c *gin.Context) {	c.JSON(http.StatusBadRequest, gin.H{
			//400
			"message": "hello zzzzworld!",
		})})

	srv := http.Server{
        Addr:    ":8080",
        Handler: router,
    }
	err := srv.ListenAndServe()
    if err != nil {
        log.Fatalf("server run error: %v", err)
    }
}