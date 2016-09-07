import React from 'react';
import {mount} from 'react-mounter';

import {MainLayout} from './layouts/MainLayout.jsx';
import ResolutionsWrapper from './resolutions/ResolutionsWrapper.jsx';
import About from './About.jsx';
import ResolutionDetail from './resolutions/ResolutionDetail.jsx';

FlowRouter.route('/', {
	name: 'home',
	action: function() {
		mount (MainLayout, {
			content: (<ResolutionsWrapper />)
		})
	}
});

FlowRouter.route('/about', {
	name: 'about',
	action: function() {
		mount (MainLayout, {
			content: (<About />)
		})
	}
});

FlowRouter.route('/resolutions/:id', {
	name: 'resolutions',
	action: function(params) {
		mount (MainLayout, {
			content: (<ResolutionDetail id={params.id} />)
		})
	}
});