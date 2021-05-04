import { confirmProbaPoint } from '../../redux/actions/proba.action';
import { connect } from 'react-redux';
import { Tochka } from './tochka';

const mapDispatchToProps = dispatch => {
  return {
    confirmProbaPoint:(probaId, pointId) => dispatch(confirmProbaPoint(probaId, pointId)),

  }
}

export default connect(null, mapDispatchToProps)(Tochka);