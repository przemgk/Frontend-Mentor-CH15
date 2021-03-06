import React from 'react';
import { text as knobsText, object } from '@storybook/addon-knobs';
import StoryRouter from 'storybook-react-router';
import DataSet from './DataSet';

export default {
  component: DataSet,
  title: 'Molecules/DataSet',
  decorators: [StoryRouter()]
};

export const text = () => {
  const labelOfLabel = 'Label';
  const defaultValueLabel = 'Languages';
  const groupIdLabel = 'Component';

  const valueLabel = knobsText(labelOfLabel, defaultValueLabel, groupIdLabel);

  const labelValue = 'Value';
  const defaultValueOfValue = 'Dutch, French, German';
  const groupIdValue = 'Component';

  const valueOfValue = knobsText(labelValue, defaultValueOfValue, groupIdValue);

  return <DataSet type="text" label={valueLabel} value={valueOfValue} />;
};

export const buttons = () => {
  const labelOfLabel = 'Label';
  const defaultValueLabel = 'Border countries';
  const groupIdLabel = 'Component';

  const valueLabel = knobsText(labelOfLabel, defaultValueLabel, groupIdLabel);

  const labelNullMessage = 'Null message';
  const defaultValueNullMessage = 'No data';
  const groupIdNullMessage = 'Component';

  const valueNullMessage = knobsText(labelNullMessage, defaultValueNullMessage, groupIdNullMessage);

  const labelValue = 'Value';
  const defaultValueOfValue = [
    { name: 'France', url: 'fr' },
    { name: 'Germany', url: 'ger' },
    { name: 'Netherlands', url: 'nth' }
  ];
  const groupIdValue = 'Component';

  const valueOfValue = object(labelValue, defaultValueOfValue, groupIdValue);

  return (
    <DataSet
      type="buttons"
      label={valueLabel}
      value={valueOfValue}
      nullMessage={valueNullMessage}
    />
  );
};
