/**
 * Copyright IBM Corp. 2016, 2025
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import PropTypes from 'prop-types';
import React, { type HTMLAttributes } from 'react';
import classnames from 'classnames';
import Form from '../Form';
import { FormContext } from './FormContext';
import { usePrefix } from '../../internal/usePrefix';

export type FluidFormProps = HTMLAttributes<HTMLFormElement>;

const FluidForm: React.FC<FluidFormProps> = ({
  className,
  children,
  ...other
}: FluidFormProps) => {
  const prefix = usePrefix();
  const classNames = classnames(`${prefix}--form--fluid`, className);

  return (
    <FormContext.Provider value={{ isFluid: true }}>
      <Form className={classNames} {...other}>
        {children}
      </Form>
    </FormContext.Provider>
  );
};

FluidForm.propTypes = {
  /**
   * Provide children to be rendered inside of the <form> element
   */
  children: PropTypes.node,

  /**
   * Provide a custom className to be applied on the containing <form> node
   */
  className: PropTypes.string,
};

export default FluidForm;
