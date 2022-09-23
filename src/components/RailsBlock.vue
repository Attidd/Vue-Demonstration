<template>

  <div class="railsTop">
    <h1>Ruby on Rails</h1>
  </div>
  <div class="block">
    <div class="railsBlock">
      <div class="railsLeft">
      Hello
      </div>
      <div class="railsRight">
      <button>RSPEC</button>
      <button>Rails 5</button>
      <button>Rails 7</button>
      <button>Ruby </button>
      <button>SQL </button>
      <button>TypeScript</button>
      <button>ActiveAdmin</button>
      </div>
    </div>
  </div>
</template>


<style scoped>

  .railsTop {
    margin: 0 auto;
    padding: 2rem;
  }

  .railsBlock {
    display: grid;
    padding: 2rem;
    grid-template-columns: 2fr 1fr;
    max-width: 1280px;
    margin: 0 auto;
  }

  button {
    background-color: #F0E7E9;
    border-radius: 3px;
    margin: 10px;
  }


  .primaryColor {
    background-color: #F0E7E9;
  }

  .secondaryColor {
    background-color: #FFF;
  }

  .ThirdColor { 
    background-color: #D30001;
  }
  
  h1 {
    color: #D30001;
    font-weight: bold;
    font-family: Calibre, sans-serif;
  }

</style>

