import Vue from "vue"
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { faLink, faRedo, faUndo } from "@fortawesome/free-solid-svg-icons"; 
import { faTrashAlt } from "@fortawesome/free-regular-svg-icons";

library.add(faLink, faRedo, faUndo, faTrashAlt);
Vue.component('font-awesome-icon', FontAwesomeIcon)