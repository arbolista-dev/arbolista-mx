import { connect } from 'react-redux';
import { ensureInfo } from  'shared/reducers/info/info.actions'

const mapStateToProps = (state) => {
  return {
    location: state['location'],
    info: state['info']
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
  	ensureInfo: () => {
  		ensureInfo.assignTo(dispatch);
  		ensureInfo();
  	}
  };
};

const layoutContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)

export default layoutContainer;
