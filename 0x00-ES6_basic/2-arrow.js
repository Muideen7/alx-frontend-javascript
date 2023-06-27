export default function getNeighborhoodsList() {
  this.sanFransciscoNeighborhoods = ['SOMA', 'Union square'];

  const self = this;
  this.addNeighborhood = (newNeighborhood) => {
    self.sanFranscicoNeighborhoods.push(newNeighborhood);
    return this.sanFranscicoNeighborhoods;
  };
}
