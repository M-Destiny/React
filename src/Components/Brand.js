
export default function Brand(props) {
    var { name } = props;
    console.log(name)
    return (
        <div>
            <div class="accordion" id="accordionPanelsStayOpenExample">

                <div class="accordion-item">
                    <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
                        <button class="accordion-button collapsed text-uppercase" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                            Brand
                        </button>
                    </h2>
                    <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
                        <div class="accordion-body">
                            <ul class="nav flex-column">
                                {name.map((value) => <li class="nav-item">
                                    <a class="nav-link text-uppercase" href="#"><input type='checkbox' />&nbsp;{value}</a>
                                </li>)}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
