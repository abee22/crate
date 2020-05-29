// App Imports
import Detail from '../../modules/product/Detail'
import List from '../../modules/admin/product/List'

// Product routes
export default {
  prod_list: {
    path: '/product',
    component: List,
    auth: true,
    exact:true
  },
  product: {
    path: (slug = ':slug') => (`/product/${ slug }`),
    component: Detail
  }
}
