import Vue from 'vue'
import Home from 'src/components/Home'

describe('Home.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Home)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.home h1').textContent)
      .to.equal('Hello World')
  })
  it('should render home components', () => {
    const Constructor = Vue.extend(Home)
    const vm = new Constructor().$mount()
    console.log(vm)
    // expect(vm.)
  })
})
