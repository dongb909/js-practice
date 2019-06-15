function negativeImage(image){
    for (var i = 0; i<image.length; i++){
        for (var j = 0; j < image[i].length; j++){
            if (image[i][j] === 0){
                image[i][j] = 1
            } else {
                image[i][j] = 0
            }
        }
    }
    return image
}

testing = [[1,1,0,0], [0,1,0,1], [0,0,0,1]]
console.log(negativeImage(testing))