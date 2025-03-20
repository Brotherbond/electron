const func = async () => {
    const response = await window.versions.ping()
    console.log(response) // prints out 'pong'
}

func()

const setButton = document.getElementById('btn')
const titleInput = document.getElementById('title')
const btn2 = document.getElementById('btn2')
const filePathElement = document.getElementById('filePath')
const counter = document.getElementById('counter')


setButton.addEventListener('click', () => {
  const title = titleInput.value
  window.electronAPI.setTitle(title)
})

btn2.addEventListener('click', async () => {
  const filePath = await window.electronAPI.openFile()
  filePathElement.innerText = filePath
})

window.electronAPI.onUpdateCounter((value) => {
  const oldValue = Number(counter.innerText)
  const newValue = oldValue + value
  counter.innerText = newValue.toString()
  window.electronAPI.counterValue(newValue)
})