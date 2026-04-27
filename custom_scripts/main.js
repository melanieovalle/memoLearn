let current = 0;

const cardTitle   = document.getElementById("card-title");
const cardBody    = document.getElementById("card-body");
const pageHeader  = document.getElementById("page-header");
const headerTitle = document.getElementById("header-title");
const btnBack     = document.getElementById("btn-back");
const btnNext     = document.getElementById("btn-next");
const btnNextLabel = document.getElementById("btn-next-label");

function loadCards() {
  const card = cards[current];
  if (card.lessonName) localStorage.setItem("lessonName", card.lessonName);

  // Update wrapper class for per-page styling
  document.body.firstElementChild.className = card.wrapperClass ?? "";

  // Optional top header (like the graphs page)
  if (card.header) {
    headerTitle.textContent = card.header;
    pageHeader.hidden = false;
  } else {
    pageHeader.hidden = true;
  }

  // Main content
  cardTitle.textContent = card.title ?? "";
  cardBody.innerHTML = card.content ?? "";

  // Back button
  if (card.backHref) {
    btnBack.textContent = card.backLabel ?? "Go back";
    btnBack.onclick = () => window.location.href = card.backHref;
    btnBack.hidden = false;
  } else if (current > 0) {
    btnBack.textContent = "← Back";
    btnBack.onclick = () => { current--; loadCards(); };
    btnBack.hidden = false;
  } else {
    btnBack.hidden = true;
  }

  // Next button
  // const isLast = current === cards.length - 2;
  // btnNextLabel.textContent = card.nextLabel ?? (isLast ? "Let's practice" : "Next");
  // btnNext.onclick = isLast
  //   ? () => window.location.href = (card.nextHref ?? "practice.html")
  //   : () => { current++; loadCards(); };
  // Next button
  btnNextLabel.textContent = card.nextLabel ?? "Next";
  btnNext.hidden = card.hideNext ?? false;
  btnNext.onclick = card.nextHref
    ? () => window.location.href = card.nextHref
    : () => { current++; loadCards(); };
}
  // btnBack.hidden = card.hideBack ?? (card.backHref ? false : current === 0);


loadCards();