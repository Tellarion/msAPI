'use strict';

/* Developed by Tellarion 2020 */
/* https://tellarion.dev */

/* it test version module :/ :/ :/ */

var https = require('https');

class msapi {
    
    constructor() {
        this.versionAPI = 2;
    }

    requestTo(method, path, data, access_token) {

        var post_data = "";
        var calc_path = (method == "GET" && data) ? `/api/v${this.versionAPI}${path}?${data}` : `/api/v${this.versionAPI}${path}`;

        if(method == "POST" && data) {

            post_data = data;

        }

        var options = {
            hostname: 'msapi.itstep.org',
            path: calc_path,
            port: 443,
            method: method,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${access_token}`
            }
        }

        return new Promise(resolve => {

            var req = https.request(options, res => {

                res.setEncoding('utf8');
                var body = '';
            
                res.on('data', function (chunk) {
                  body = body + chunk;
                });
            
                res.on('end',function(){
                    resolve(JSON.parse(body));
                });
            
            });
              
            req.on('error', error => {
                resolve(error);
            })
            
            req.write(post_data);
            req.end();

        });
    }

    /* BASICS */

    getZonesList() {
        return this.requestTo("GET", '/public/cities');
    }

    getLanguagesList() {
        return this.requestTo("GET", '/public/languages');
    }

    getTranslation() {
        return this.requestTo("GET", '/public/translations');
    }

    authStudent(applicationKey, cityId, username, password) {
        return this.requestTo("POST", '/auth/login', JSON.stringify({'application_key': applicationKey, 'cityId': cityId, 'username': username, 'password': password }));
    }

    authRelativeAsStudent() {
        // sasasdasdasdasd
    }

    resetPassword(userEmail) {
        return this.requestTo("POST", '/auth/reset-password', JSON.stringify({'user_email': userEmail }));
    }

    /* WITH TOKEN */

    authUserByRefresh(access_token) {
        return this.requestTo("POST", '/auth/refresh', JSON.stringify({'refresh_token': access_token }));
    }

    /* _? */

    getPublicForms(access_token) {
        return this.requestTo("GET", '/settings/public-forms', null, access_token);
    }

    getPublicSpecs(access_token, id) {
        return this.requestTo("GET", '/settings/public-specs', `id=${id}`, access_token);
    }

    /* _a */

    getLeaderGroupStat(access_token) {
        return this.requestTo("GET", '/dashboard/progress/leader-group-points', null, access_token);
    }

    getLeaderStreamStat(access_token) {
        return this.requestTo("GET", '/dashboard/progress/leader-stream-points', null, access_token);
    }

    getGamingActivityLog(access_token) {
        // has one param
        return this.requestTo("GET", '/dashboard/progress/activity', null, access_token);
    }

    getCounterHomework(access_token) {
        return this.requestTo("GET", '/count/homework', null, access_token);
    }

    getAttendanceStat(access_token) {
        return this.requestTo("GET", '/dashboard/progress/attendance-statistic', null, access_token);
    }

    getAcademicStat(access_token) {
        return this.requestTo("GET", '/dashboard/progress/academic-performance', null, access_token);
    }

    getLeaderGroup(access_token) {
        return this.requestTo("GET", '/dashboard/progress/leader-group', null, access_token);
    }

    getLeaderStream(access_token) {
        return this.requestTo("GET", '/dashboard/progress/leader-stream', null, access_token);
    }

    getProgressChartData(access_token) {
        return this.requestTo("GET", '/dashboard/chart/average-progress', null, access_token);
    }

    getAttendanceChartData(access_token) {
        return this.requestTo("GET", '/dashboard/chart/attendance', null, access_token);
    }

    getFutureExams(access_token) {
        return this.requestTo("GET", '/dashboard/info/future-exams', null, access_token);
    }

    /* _b */

    getUserInfo(access_token) {
        return this.requestTo("GET", '/settings/user-info', null, access_token);
    }

    getPageCounters(access_token) {
        return this.requestTo("GET", '/count/page-counters', null, access_token);
    }

    getLibraryCounters(access_token) {
        return this.requestTo("GET", '/count/library', null, access_token);
    }

    checkReferrals(access_token) {
        return this.requestTo("GET", '/referral/operations/check-new-reward', null, access_token);
    }

    getEvaluationsList(access_token) {
        return this.requestTo("GET", '/feedback/students/evaluate-lesson-list', null, access_token);
    }

    /* _c */

    getCityContacts(access_token) {
        return this.requestTo("GET", '/contacts/operations/index', null, access_token);
    }

    /* _d */

    getProgressVisitData(access_token) {
        // param 1
        return this.requestTo("GET", '/progress/operations/student-visits', null, access_token);
    }

    getExamsData(access_token) {
        return this.requestTo("GET", '/progress/operations/student-exams', null, access_token);
    }

    studyPlanUrl(access_token) {
        return this.requestTo("GET", '/progress/operations/plan-url', null, access_token);
    }

    /* _e */

    getGroupSpecsHistory(access_token) {
        return this.requestTo("GET", '/settings/history-specs', null, access_token);
    }

    getGroupSpecs(access_token) {
        return this.requestTo("GET", '/settings/group-specs', null, access_token);
    }

    /* _f */

    getAchievements(access_token) {
        return this.requestTo("GET", '/profile/statistic/student-achievements', null, access_token);
    }

    getReviewList(access_token) {
        return this.requestTo("GET", '/feedback/social-review/get-review-list', null, access_token);
    }

    getInstruction(access_token) {
        return this.requestTo("GET", '/reviews/index/instruction', null, access_token);
    }

    /* _g */

    getVacancies(access_token) {
        return this.requestTo("GET", '/vacancy/operations/available-vacancies', null, access_token);
    }

    postViewVacancies(access_token) {
        // id
        return this.requestTo("POST", '/vacancy/operations/set-view', null, access_token);
    }

    getUnreadVacancies(access_token) {
        return this.requestTo("GET", '/vacancy/operations/count-unread', null, access_token);
    }

    /* _h */

    getProfileDataForm(access_token) {
        return this.requestTo("GET", '/vacancy/operations/count-unread', null, access_token);
    }

    /*

    postProfileDate(access_token) {
        return this.requestTo("GET", '/vacancy/operations/count-unread', null, access_token);
    }
    and moreeeeee..................
    */

    sendConfirmation(access_token, email) {
        return this.requestTo("POST", '/contacts/mailing/send-confirmation', JSON.stringify({'email': email }), access_token);
    }

    getRecommendationsList(access_token) {
        return this.requestTo("GET", '/referral/operations/list', null, access_token);
    }

    /* _z for test */

    getListOrders(access_token) {
        // need serialize, after
        return this.requestTo("GET", '/market/admin/order/list', null, access_token);
    }

    adminGroups(access_token) {
        return this.requestTo("GET", '/settings/admin-groups', null, access_token);
    }

    adminGroupStudents(access_token) {
        return this.requestTo("GET", '/settings/admin-group-students', null, access_token);
    }

    /* DISABLE */
    /*
    checkStatus(access_token) {
        return this.requestTo("GET", '/payment/operations/check-cancellation', null, access_token);
    }
    confirmReferrals(access_token) {
        return this.requestTo("POST", '/referral/operations/read-new-reward', null, access_token);
    }
    ??? ====
    sendEvaluation(access_token) {
        // need key ???
        return this.requestTo("POST", '/feedback/students/evaluate-lesson', null, access_token);
    }
    OTHER
    /library/operations/list - get
    /library/operations/list-all - get
    /library/operations/set-use-material - post
    /count/set-view-materials - post
    /library/operations/quizzes-academic-debt - get
    /library/operations/check-url - post
    [messageToTeacher] /contacts/operations/send-teach - post
    [massageToDirector] /contacts/operations/send-ceo - post
    [changeCurrentGroup] /settings/change-current-group - post
    [sendReviewScreen] /feedback/social-review/screen-review - post
    koroche zaebalsy tak zapushu
    */
    
}

module.exports = new msapi();