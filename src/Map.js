import React, { Component } from 'react';

class Map extends Component {

    state = {
        edit: true
    }

    render() {
        let layout = (
            <div>
                { this.props.stories.map((story, index) => {
                    return story.edit ? 
                    <div>
                        <br/>
                        <input type="text" defaultValue={story.title} ref="stuff2" /><button name="Save" onClick={this.props.handleToggle} value={story.id}>Save</button> 
                        <br/>
                    </div>
                    : 
                    <div>
                        <br/>
                        <div ref="1">{story.title}<button onClick={this.props.handleToggle} value={story.id}>Edit</button><button onClick={this.props.handleDelete}>Delete</button></div>
                        <br/>
                    </div>
                 })}
            </div>
            )

        return (
            <div>
                {layout}
            </div>
        );
    }
}

export default Map;