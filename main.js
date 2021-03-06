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
    this.direction = direction
    this.$img.classList = ''
    this.$img.classList.add(direction)
  }
  move() {
    switch (this.direction) {
      case 'north':
      if(this.location[1] >= 0)
      this.location[1] -= this.speed
      break
      case 'south':
      this.location[1] += this.speed
      break
      case 'east':
      this.location[0] += this.speed
      break
      case 'west':
      if(this.location[0] >= 0)
      this.location[0] -= this.speed
    }
    this.$img.setAttribute('style', ('top: ' + this.location[1] + 'px; left: ' + this.location[0] + 'px;'))
  }
  start() {
    this.go = null
    this.go = setInterval(this.move.bind(this), 16)
  }
  stop() {
    clearInterval(this.go)
    this.go = null
  }
}

var myCar = new Car($img, 5, 'east', [0, 0])

window.addEventListener('keydown', function(event) {
  switch (event.key) {
    case 'ArrowUp':
      myCar.turn('north')
      break
    case 'ArrowDown':
      myCar.turn('south')
      break
    case 'ArrowRight':
      myCar.turn('east')
      break
    case 'ArrowLeft':
      myCar.turn('west')
      break
    case ' ':
    if(!myCar.go) {
      myCar.start()
    }
    else {
      myCar.stop()
    }
  }
})
