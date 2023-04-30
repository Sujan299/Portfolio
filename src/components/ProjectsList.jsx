function ProjectsList(props) {
    return (
        <>
            {props.data.map((item) => (
                <div>
                    <img src={item.img} alt="" />
                    <h4 class="title">{item.projectName}</h4>
                    <h5>{item.Skills}</h5>
                    <button type="submit"><a href="http://">Visit</a></button>
                </div>
            ))}

        </>
    )
}
export default ProjectsList;