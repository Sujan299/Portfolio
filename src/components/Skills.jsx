function Skills() {
    const htmlskill = 80;
    const cssskill = 60;
    const js = 55;
    const react = 50;
    const php = 40;
    const mysql = 50;
    return (
        <>
            <div className="container">
                <div className="content">
                    <h2>S<span>k</span>ills</h2>
                    <div className="skillSet">
                        <h3>HTML</h3>
                        <span>{htmlskill}%</span>
                        < input type="range" min="0" max="100" value={htmlskill} />
                        <h3>CSS</h3>
                        <span>{cssskill}%</span>
                        <input type="range" min="0" max="100" value={cssskill} />
                        <h3>Javascript</h3>
                        <span>{js}%</span>
                        <input type="range"
                            min="0"
                            max="100"
                            value={js} />
                        <h3>ReactJs</h3>
                        <span>{react}%</span>
                        <input type="range" 
                        min="0"
                        max="100"
                        value={react} 
                        />
                        <h3>PHP</h3>
                        <span>{php}%</span>
                        <input type="range"
                        min="0"
                        max="100"
                        value={php}  />
                        <h3>MySQL</h3>
                        <span>{mysql}%</span>
                        <input type="range"
                        min="0"
                        max="100"
                        value={mysql}  />
                    </div>
                </div>
            </div>
        </>
    )
}
export default Skills;