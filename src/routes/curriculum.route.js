const curriculumService = require('../services/curriculum.service')
const authService = require('./../services/auth.service')

const multer = require('multer')
const upload = multer()

module.exports = app => {
    app.post('/curriculum', authService.authorize('user'), upload.single('pdf'), async(req, res) => {
        try {
            const curriculum = req.file
            const curriculumSchema = {
                user_id: req.body.user_id,
                ...curriculum
            }

            const savedCurriculum = await curriculumService.saveCurriculumInDatabase(curriculumSchema)

            res.status(200).send({
                message: 'Curriculum saved successfully',
                curriculum: {...savedCurriculum[0] }
            })
        } catch (error) {
            res.status(400).send({ message: error.message })
        } finally {
            res.end()
        }
    })

    app.delete('/curriculum', authService.authorize('user'), async(req, res) => {
        try {
            const curriculum = req.body
            await curriculumService.deleteCurriculumFromDatabase(curriculum)
            res.status(200).send({
                message: 'curriculum deleted successfully'
            })
        } catch (error) {
            res.status(400).send({ message: error.message })
        } finally {
            res.end()
        }
    })

    app.get('/curriculum/:id', async(req, res) => {
        try {
            let curriculum = { curriculum_id: req.params.id || 0 }
            const curriculums = await curriculumService.getCurriculumFromDatabase(curriculum)

            res
                .status(200)
                .send({ 'curriculum': curriculums[0] })
        } catch (error) {
            res
                .status(500)
                .send({
                    'message': error.message
                })
        } finally {
            res.end()
        }
    })

    app.get('/curriculum', async(req, res) => {
        try {
            const user_id = req.query.user_id
            let curriculums

            if (user_id) curriculums = await curriculumService.getCurriculumFromDatabase({ user_id })
            else curriculums = await curriculumService.getCurriculumFromDatabase()

            res.status(200).send({
                message: "successful curriculums",
                curriculums: curriculums.recordsets
            })
        } catch (error) {
            res.status(500).send({ message: error.message })
        } finally {
            res.end()
        }
    })
}