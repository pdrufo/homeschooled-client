export const findSchoolLog = (schoolLogs = [], schoolLogId) =>
  schoolLogs.find((schoolLog) => schoolLog.id == parseInt(schoolLogId));

