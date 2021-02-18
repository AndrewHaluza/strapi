import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Padded } from '@buffetjs/core';
import ContentTypeCollapses from '../ContentTypeCollapses';
import GlobalActions from '../GlobalActions';
import Wrapper from './Wrapper';

const ContentTypes = ({ kind, layout: { actions, subjects } }) => {
  return (
    <Wrapper>
      <Padded left right bottom size="md">
        <GlobalActions actions={actions} kind={kind} />
        <ContentTypeCollapses pathToData={kind} subjects={subjects} actions={actions} />
      </Padded>
    </Wrapper>
  );
};

ContentTypes.propTypes = {
  kind: PropTypes.string.isRequired,
  layout: PropTypes.shape({
    actions: PropTypes.array,
    subjects: PropTypes.arrayOf(
      PropTypes.shape({
        uid: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        properties: PropTypes.array.isRequired,
      })
    ),
  }).isRequired,
};

export default memo(ContentTypes);
