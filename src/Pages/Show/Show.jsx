import React, {useEffect} from 'react'
import {withRouter} from "react-router-dom"
import {connect} from "react-redux"
import {getShow} from "../../actions/shows.js"
import ShowCard from '../../components/ShowCard'

function Show(props) {
  useEffect(() => {
    props.getShow(props.match.params.id)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.match.params.id])

  console.log(props)
  return (
    <div>

     {props.show && <ShowCard src={props.show.image ? props.show.image.medium : "" } 
      id={props.show.id} 
      title={props.show.name}
      description={props.show.summary}
      />}
    </div>
  )
}

const mapStateToProps = (state) => ({
  show: state.show.currentShow
})

const mapDispatchToProps = dispatch => ({
  getShow: (id) => dispatch(getShow(id))
})


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Show))
