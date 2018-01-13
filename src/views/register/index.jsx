import React from 'react'

import { createForm } from 'rc-form'

const Register = createForm()(class Detail extends React.PureComponent {
  static contextTypes = {
    router: React.PropTypes.object.isRequired
  }

  render() {
    return <section>
      我的注册
    </section>
  }

})


export default Register