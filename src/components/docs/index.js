import React from 'react';
// import PropTypes from 'prop-types';
import Accordion from '../../common/Accordion';
import { CODE_SAMPLES } from './constants';

const Docs = () => {
    return (
        <section className="docs">
            <h1>Creating a JSON</h1>
            {CODE_SAMPLES.map((object)=>(
            <Accordion {...object} />
            ))}
      </section>
    )
}

// Docs.propTypes = {

// }

export default Docs;
