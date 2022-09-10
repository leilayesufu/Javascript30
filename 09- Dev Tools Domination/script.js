const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

    function makeGreen() {
      const p = document.querySelector('p');
      p.style.color = '#BADA55';
      p.style.fontSize = '50px';
    }

    // Regular
console.log("hello")
    // Interpolated
console.log("hello %s string!", "Leila")
    // Styled
    console.log('%c style text', 'font-size:50px')
    // warning!
    console.warn("Warning!")
    // Error :|
    console.error("Error")
    // Info
    console.info("Leila is beautiful")
    // Testing
console.assert(3+3== 4, "Wrong")
    // clearing
// console.clear()
    // Viewing DOM Elements
console.dir(p)
    // Grouping together
    console.groupCollapsed(`${dog.name}`);
    console.log(`This is ${dog.name}`);
    console.log(`${dog.name} is ${dog.age} years old`);
    console.log(`${dog.name} is ${dog.age * 7} dog years old`);
    console.groupEnd(`${dog.name}`);
    // counting

    console.count('Wes');
    console.count('Wes');
    console.count('Steve');
    console.count('Steve');
    console.count('Wes');
    console.count('Steve');
    console.count('Wes');
    console.count('Steve');
    console.count('Steve');
    console.count('Steve');
    console.count('Steve');
    console.count('Steve');

    // timing

    console.time('fetching data');
    fetch('https://api.github.com/users/wesbos')
      .then(data => data.json())
      .then(data => {
        console.timeEnd('fetching data');
        console.log(data);
      });

    console.table(dogs);