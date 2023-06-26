export default function getNeighborhoodsList() {
  this.sanFransciscoNeighborhoods = ['SOMA', 'Union square'];

  this.addNeighborhood = (newNeighborhood) => {
    this.sanFranscicoNeighborhoods.push(newNeighborhood);
    return this.sanFranscicoNeighborhoods;
  };
}
