import React, {Component} from 'react';
import Edit from "./edit";
import NoEdit from "./noEdit";
export default class HaveShopping extends Component {
    render() {
        return (
            <div>
                {
                    this.props.isEdit ? <Edit
                        showList={this.props.showList}
                        isShowList={this.props.isShowList}
                        isStoreCheck={this.props.isStoreCheck}
                        cancelStoreSelect={this.props.cancelStoreSelect}
                        storeSelect={this.props.storeSelect}
                        isAllSelect={this.props.isAllSelect}
                        cancelALLSelect={this.props.cancelALLSelect}
                        onAllSelect={this.props.onAllSelect}
                        dataList={this.props.dataList}
                        onEdit={this.props.onEdit}
                    />:
                        <NoEdit
                            showList={this.props.showList}
                            isShowList={this.props.isShowList}
                            isStoreCheck={this.props.isStoreCheck}
                            cancelStoreSelect={this.props.cancelStoreSelect}
                            storeSelect={this.props.storeSelect}
                            isAllSelect={this.props.isAllSelect}
                            cancelALLSelect={this.props.cancelALLSelect}
                            onAllSelect={this.props.onAllSelect}
                            dataList={this.props.dataList}
                            onEdit={this.props.onEdit}
                        />
                }
            </div>
        )
    }
}
