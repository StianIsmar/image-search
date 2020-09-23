import React from 'react'
import { Icon } from "@equinor/eds-core-react";
import {
  info_circle,
  compare,
  trending_flat,
  refresh,
} from "@equinor/eds-icons";

const SwellInfo = (props) => {

    return(<div>
        <li key={props.index}>
        </li>
        <Icon
          name="trending_flat"
          color={"orange"}
          rotation={props.data}
          size={32}
        />
      </div>)

}

export default SwellInfo
