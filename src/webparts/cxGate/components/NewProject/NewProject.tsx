
import * as React from 'react';

import { TextField } from '@fluentui/react/lib/TextField';
import { DatePicker } from '@fluentui/react/lib/DatePicker';
import { PrimaryButton, DefaultButton } from '@fluentui/react/lib/Button';
import { Stack } from '@fluentui/react/lib/Stack';
import { MessageBar, MessageBarType } from '@fluentui/react/lib/MessageBar';

import styles from './NewProject.module.scss';

export interface INewProject {
  name: string;
  description: string;
  proposer: string;
  reviewer: string;
  estimatedBudget: number;
  estimatedStartDate: Date;
  estimatedEndDate: Date;
}

export interface INewProjectProps {
  onSubmit: (project: INewProject) => void;
  onCancel?: () => void;
}

const NewProject: React.FC<INewProjectProps> = ({
  onSubmit,
  onCancel
}) => {

  const [name, setName] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [proposer, setProposer] = React.useState('');
  const [reviewer, setReviewer] = React.useState('');
  const [estimatedBudget, setEstimatedBudget] = React.useState('');
  const [startDate, setStartDate] = React.useState<Date | undefined>();
  const [endDate, setEndDate] = React.useState<Date | undefined>();

  const [errors, setErrors] = React.useState<string[]>([]);

  const validateForm = (): boolean => {
    const validationErrors: string[] = [];

    if (!name.trim()) {
      validationErrors.push('Project name is required.');
    }

    if (!description.trim()) {
      validationErrors.push('Project description is required.');
    }

    if (!proposer.trim()) {
      validationErrors.push('Proposer is required.');
    }

    if (!reviewer.trim()) {
      validationErrors.push('Reviewer is required.');
    }

    const budget = Number(estimatedBudget);

    if (!estimatedBudget.trim() || !Number.isFinite(budget) || budget <= 0) {
      validationErrors.push('Enter a valid estimated budget greater than zero.');
    }

    if (!startDate) {
      validationErrors.push('Estimated start date is required.');
    }

    if (!endDate) {
      validationErrors.push('Estimated end date is required.');
    }

    if (startDate && endDate && endDate <= startDate) {
      validationErrors.push('Estimated end date must be after the start date.');
    }

    setErrors(validationErrors);

    return validationErrors.length === 0;
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    if (!validateForm() || !startDate || !endDate) {
      return;
    }

    const project: INewProject = {
      name: name.trim(),
      description: description.trim(),
      proposer: proposer.trim(),
      reviewer: reviewer.trim(),
      estimatedBudget: Number(estimatedBudget),
      estimatedStartDate: startDate,
      estimatedEndDate: endDate
    };

    onSubmit(project);
  };

  const handleReset = (): void => {
    setName('');
    setDescription('');
    setProposer('');
    setReviewer('');
    setEstimatedBudget('');
    setStartDate(undefined);
    setEndDate(undefined);
    setErrors([]);
  };

  return (
    <div className={styles.newProjectContainer}>

      <div className={styles.formHeader}>
        <h2>Register New Project</h2>
        <p>
          Enter the project details below to register a new project
          in CX Gate.
        </p>
      </div>

      {errors.length > 0 && (
        <MessageBar
          messageBarType={MessageBarType.error}
          isMultiline={true}
        >
          <ul className={styles.errorList}>
            {errors.map((error, index) => (
              <li key={index}>{error}</li>
            ))}
          </ul>
        </MessageBar>
      )}

      <form onSubmit={handleSubmit} noValidate>

        <Stack tokens={{ childrenGap: 18 }}>

          <div className={styles.formSection}>
            <h3>Project Information</h3>

            <TextField
              label="Project Name"
              placeholder="Enter project name"
              value={name}
              onChange={(_, value) => setName(value || '')}
              required
            />

            <TextField
              label="Description"
              placeholder="Describe the project objectives and scope"
              value={description}
              onChange={(_, value) => setDescription(value || '')}
              multiline
              rows={4}
              required
            />
          </div>

          <div className={styles.formSection}>
            <h3>Project Ownership</h3>

            <Stack horizontal tokens={{ childrenGap: 16 }}>
              <Stack.Item grow={1}>
                <TextField
                  label="Proposer"
                  placeholder="Enter proposer name"
                  value={proposer}
                  onChange={(_, value) => setProposer(value || '')}
                  required
                />
              </Stack.Item>

              <Stack.Item grow={1}>
                <TextField
                  label="Reviewer"
                  placeholder="Enter reviewer name"
                  value={reviewer}
                  onChange={(_, value) => setReviewer(value || '')}
                  required
                />
              </Stack.Item>
            </Stack>
          </div>

          <div className={styles.formSection}>
            <h3>Budget and Timeline</h3>

            <TextField
              label="Estimated Budget"
              placeholder="Enter estimated budget"
              prefix="$"
              type="number"
              min={0}
              value={estimatedBudget}
              onChange={(_, value) => setEstimatedBudget(value || '')}
              required
            />

            <Stack horizontal tokens={{ childrenGap: 16 }}>
              <Stack.Item grow={1}>
                <DatePicker
                  label="Estimated Start Date"
                  placeholder="Select start date"
                  value={startDate}
                  onSelectDate={date => {
  const selectedDate = date || undefined;

  setStartDate(selectedDate);

  if (selectedDate && endDate && endDate <= selectedDate) {
    setEndDate(undefined);
  }
}}
                  isRequired
                  firstDayOfWeek={0}
                />
              </Stack.Item>

              <Stack.Item grow={1}>
                <DatePicker
                  label="Estimated End Date"
                  placeholder="Select end date"
                  value={endDate}
                  onSelectDate={date => setEndDate(date || undefined)}
                  minDate={startDate}
                  isRequired
                  firstDayOfWeek={0}
                />
              </Stack.Item>
            </Stack>
          </div>

          <Stack
            horizontal
            horizontalAlign="end"
            tokens={{ childrenGap: 10 }}
            className={styles.formActions}
          >
            <DefaultButton
              text="Reset"
              onClick={handleReset}
            />

            {onCancel && (
              <DefaultButton
                text="Cancel"
                onClick={onCancel}
              />
            )}

            <PrimaryButton
              type="submit"
              text="Submit Project"
            />
          </Stack>

        </Stack>
      </form>
    </div>
  );
};

export default NewProject;
