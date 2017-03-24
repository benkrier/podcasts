import { Template } from 'meteor/templating';
import { Podcasts } from '../../collections/podcasts.js';
import './podcasts.html';

Template.podcasts.helpers({
  podcasts() {
    return Podcasts.find();
  },
});
