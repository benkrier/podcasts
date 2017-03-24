import { Template } from 'meteor/templating';
import { Podcasts } from '../../collections/podcasts.js';
import './podcasts.html';

Template.podcasts.onCreated(() => {
  Template.instance().subscribe('podcasts');
});

Template.podcasts.helpers({
  podcasts() {
    return Podcasts.find();
  },
});
