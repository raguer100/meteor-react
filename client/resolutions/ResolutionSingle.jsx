import React, {Component} from 'react';

export default class ResolutionSingle extends Component {

	toogleChecked() {
		Meteor.call('toggleResolution', this.props.resolution);
	}

	deleteResolution() {
		Meteor.call('deleteResolution', this.props.resolution);
	}

	render() {
		const resolutionClass = this.props.resolution.complete ? "checked" : "";
		const status = this.props.resolution.complete ? <span className="completed">Completed</span> : "";

		return (
			<li className={resolutionClass}>
				<input type="checkbox"
					readOnly={true}
					checked={this.props.resolution && this.props.resolution.complete}
					onClick={this.toogleChecked.bind(this)} />

				<a href={"/resolutions/" + this.props.resolution._id}>{this.props.resolution && this.props.resolution.text}</a>
				{status}
				
				<button className="btn-cancel"
					onClick={this.deleteResolution.bind(this)}>
					&times;
				</button>

			</li>
		)
	}
}