const curriculumSchema = require('./../schemas/curriculum.shema')
const curriculumService = require('../services/curriculum.service')
const authService = require('./../services/auth.service')

const {Validator} = require('express-json-validator-middleware');
const validate = new Validator({allErrors: true}).validate

module.exports = app => {
    app.post('/curriculum', authService.authorize('user'), async (req, res)=>{
        try {
            const curriculum = req.body
            const savedCurriculum = await curriculumService.saveCurriculumInDatabase(curriculum)
            res.status(200).send({
                message: 'Curriculum saved successfully',
                curriculum: {...savedCurriculum[0]}
            })
        }catch (error) {
            res.status(400).send({message: error.message})
        }finally{
            res.end()
        }
    })

    app.put('/recruiter', validate({body: curriculumSchema()}), authService.authorize('user'), async (req, res)=>{
        try {
            const curriculum = req.body
            await curriculumService.updateCurriculumInDatabase(curriculum)
            res.status(200).send({
                message: 'Curriculum updated successfully'
            })
        }catch (error) {
            res.status(400).send({message: error.message})
        }finally{
            res.end()
        }
    })

    app.delete('/curriculum', authService.authorize('user'), async (req, res)=>{
        try {
            const curriculum = req.body
            await curriculumService.deleteCurriculumFromDatabase(curriculum)
            res.status(200).send({
                message: 'curriculum deleted successfully'
            })
        }catch (error) {
            res.status(400).send({message: error.message})
        }finally{
            res.end()
        }
    })

    app.get('/curriculum/:id',async (req, res) => {
        try {
            let curriculum = {curriculum_id: req.params.id || 0}
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

    app.get('/curriculum', async (req, res) => {
        try {
            let curriculums = await curriculumService.getCurriculumFromDatabase()
            res.status(200).send({
                message: "successful curriculums",
                recruiters: curriculums
            })
        } catch (error) {
            res.status(500).send({ message: error.message })
        } finally {
            res.end()
        }
    })
}
