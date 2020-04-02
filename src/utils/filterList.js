/* eslint-disable import/prefer-default-export */
export function filterPeople(e, persons) {
  let updatedPeople = persons;

  updatedPeople = updatedPeople.filter(
    (person) =>
      person.name.toLowerCase().search(e.target.value.toLowerCase()) !== -1,
  );
  this.setState({ people: updatedPeople });
}
