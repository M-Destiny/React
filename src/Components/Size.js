
export default function Size(props) {
  var { name } = props;
  
  return (
    <div>
      <div class="accordion" id="accordionPanelsStayOpenExample">
        <div class="accordion-item">
          <h2 class="accordion-header" id="panelsStayOpen-headingOne">
            <button class="accordion-button collapsed text-uppercase" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="false" aria-controls="panelsStayOpen-collapseOne">
            Size
            </button>
          </h2>
          <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingOne">
            <div class="accordion-body">
              <ul class="nav flex-column">
                <li class="nav-item">
                  <a class="nav-link" href="#"><input type='checkbox' />&nbsp;{name[0]}</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#"><input type='checkbox' />&nbsp;{name[1]}</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#"><input type='checkbox' />&nbsp;{name[2]}</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#"><input type='checkbox' />&nbsp;3XL</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#"><input type='checkbox' />&nbsp;40</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}