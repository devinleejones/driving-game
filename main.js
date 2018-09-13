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
}

var myCar = new Car($img, 20, 'east', [0, 0])

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
  }
})
