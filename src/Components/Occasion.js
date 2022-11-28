
export default function Occasion() {
  return (
    <div>
      <div class="accordion" id="accordionPanelsStayOpenExample">
        <div class="accordion-item">
          <h2 class="accordion-header" id="panelsStayOpen-headingThree">
            <button class="accordion-button collapsed text-uppercase" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
            Occasion
            </button>
          </h2>
          <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
            <div class="accordion-body">
              <ul class="nav flex-column">
                <li class="nav-item">
                  <a class="nav-link text-capitalize" href="#"><input type='checkbox' />&nbsp;casual</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link text-capitalize" href="#"><input type='checkbox' />&nbsp;sports</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link text-capitalize " href="#"><input type='checkbox' />&nbsp;party</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link text-capitalize" href="#"><input type='checkbox' />&nbsp;formal</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link text-capitalize" href="#"><input type='checkbox' />&nbsp;beach wear</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
