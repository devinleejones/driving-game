var $img = document.createElement('img')
$img.setAttribute('src', 'http://res.cloudinary.com/devinleejones/image/upload/c_scale,w_88/v1536861812/images.png')
document.body.appendChild($img)

class Car {
  constructor($img, speed, direction, location) {
    this.$img = $img
    this.speed = speed
    this.direction = direction
    this.location = location
  }
  turn(direction) {
    this.$img.classList.remove(this.direction)
    this.direction = direction
    this.$img.classList.add(direction)
  }
}

var myCar = new Car($img, 20, 'east', [0, 0])
