export default function decorate(block) {
  const rows = [...block.children];
  const list = document.createElement('div');

  list.className = 'faq-accordion-list';

  rows.forEach((row) => {
    const cells = [...row.children];

    if (cells.length < 2) return;

    const questionCell = cells[0];
    const answerCells = cells.slice(1);
    const question = questionCell.textContent.trim();

    if (!question) return;

    const item = document.createElement('details');
    const summary = document.createElement('summary');
    const answer = document.createElement('div');

    item.className = 'faq-accordion-item';
    summary.className = 'faq-accordion-question';
    answer.className = 'faq-accordion-answer';

    summary.textContent = question;

    answerCells.forEach((cell) => {
      answer.append(...cell.childNodes);
    });

    item.append(summary, answer);
    list.append(item);
  });

  block.replaceChildren(list);
}