function create(){
    //this will get the value typed into the name input box by the user
    const name1 = document.getElementById("nameInput1").value;
    const adj1 = document.getElementById("adj1").value;
    const noun1 = document.getElementById("noun1").value;
    const ing1 = document.getElementById("ing1").value;
    const adj2 = document.getElementById("adj2").value;
    const food = document.getElementById("food").value;
    const verb1 = document.getElementById("verb1").value;
    const num = document.getElementById("num").value;
    const adj3 = document.getElementById("adj3").value;
    const exclam = document.getElementById("exclam").value;
   
    const story = name1 + " was having a pretty " + adj1 + " day at school. They walked into class, sat down at their desk, and immediately noticed something strange: there was a " + noun1 + " sitting in the middle of the classroom. Nobody seemed to know where it came from. A few students started " + ing1 + " , while everyone else just stared at it. Their teacher walked in, looked around, and said, Well, this is certainly " + adj2 + " At lunch, things somehow got even stranger. The cafeteria was serving " + food + " and the principal announced that everyone would have to " + verb1 + " for the next " + num + " minutes. By the end of the day, " + name1 + " was feeling " + adj3 + " and had officially decided that school was never going to be normal again. As they walked out the front doors, they turned around, looked at the building, and shouted:" + exclam + "!"
    
    //print story on website
    document.getElementById("madlib").textContent = story;
}