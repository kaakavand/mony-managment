let all = 5000
let val;
let risk = 0.2
let span = document.querySelector('span')

const copyToClipboard = str => {
  if (navigator && navigator.clipboard && navigator.clipboard.writeText)
    return navigator.clipboard.writeText(str);
  return Promise.reject('The Clipboard API is not available.');
};

document.querySelector('#risk').addEventListener('change', (e) => {
  e.preventDefault()
  risk = e.target.value
})

document.querySelector('#val').addEventListener('change', (e) => {
  e.preventDefault()
  if(Number(e.target.value)){
    val = e.target.value
  }
})

document.querySelector('#all').addEventListener('change', (e) => {
  e.preventDefault()
  all = e.target.value
})

document.querySelector('.form').addEventListener('submit', (e) => {
  e.preventDefault()
  const riskPerAll = (risk * all) / 100
  const newVal = riskPerAll / val
  const res = Number(newVal.toFixed(2))
  span.innerHTML = `<h1 class="h1">حجم مناسب ${res}</h1>`
})

span.addEventListener('click', (e) => {
  e.preventDefault()
  if (e.target.className === 'h1') {
    const value = e.target.innerHTML.split('حجم مناسب').join('')
    copyToClipboard(Number(value))
    e.target.innerHTML = 'کپی شد'
    e.target.style.color = '#0893af'
    setTimeout(() => {
      e.target.style.color = '#fff'
      e.target.innerHTML = `حجم مناسب ${value}`
    }, 1000);
  }
})