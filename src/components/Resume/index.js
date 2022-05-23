

function Resume() {
    
    const proficiencies = ['Javascript', 'React', 'CSS', 'Html5', 'MySQL', 'MongoDB', 'Express', 'PWA', 'VSCode', 'Rest API', 'Github', 'AcrGIS Software', 'AutoCAD Civil 3D', 'Googling']
    
    let list = document.getElementById('pList')
    console.log(list)
    
    proficiencies.forEach((item) => {
        console.log('stuff', item)
        let li = document.createElement("li");
        li.innerText = item;
        console.log(item)
        list.appendChild(li);
        console.log("bang", li)
    })
    return (
       
       <section className="resume">
           <h2 className=" is-size-4 p-3">Proficiencies</h2>
            <ul id="pList"></ul>
            <div className="is-size-5 p-3">
                <a href="/pdf/jhessler.pdf" download="jhessler">Download Resume!</a>
            </div>
       </section>
    )

}

export default Resume;